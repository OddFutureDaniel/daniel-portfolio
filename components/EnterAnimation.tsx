'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import type p5Type from 'p5';

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

// Add TypeScript interface for component props
interface EnterAnimationProps {
  onComplete?: () => void;
}

interface FallingLetter {
  char: string;
  x: number;
  y: number;
  velocityY: number;
  targetY: number;
  settled: boolean;
}

// Interface for character state
interface Character {
  x: number;
  y: number;
  targetX: number;
  currentFrame: number;
  frameTimer: number;
  direction: 'left' | 'right';
}

// Interface for a single ASCII point
interface Point {
  x: number;
  y: number;
  char: string;
}

// Interface for frame pixel data structure
interface FramePixelData {
  left: Point[][];
  right: Point[][];
}

export default function EnterAnimation({ onComplete }: EnterAnimationProps) {
  // Track whether user is on mobile device (affects animation behavior)
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [droppedLetters, setDroppedLetters] = useState<FallingLetter[]>([]);


  const [showTap, setShowTap] = useState<boolean>(true);
  const [tapFading, setTapFading] = useState<boolean>(false);

  useEffect(() => {
    if (droppedLetters.length >= 1 && showTap) {
      setTapFading(true);
      setTimeout(() => setShowTap(false), 800);
    }
  }, [droppedLetters.length]);

  // Character state object - stores position, animation frame, and movement data
  let character: Character = {
    x: 0,                    // Current horizontal position on screen
    y: 0,                    // Current vertical position on screen
    targetX: 0,              // Horizontal position character is moving towards (cursor position)
    currentFrame: 0,         // Which animation frame is currently being displayed (0-8)
    frameTimer: 0,           // Counter to control frame rate of animation
    direction: 'right',      // Which direction character is facing ('left' or 'right')
  };

  // Variables to hold the loaded sprite sheet images
  let walkLeftSheet: p5Type.Image;         // Sprite sheet for walking left animation
  let walkRightSheet: p5Type.Image;        // Sprite sheet for walking right animation

  // Stores processed pixel data from sprite sheets
  // Each frame is converted to an array of {x, y, char} points
  let framePixelData: FramePixelData = {
    left: [],                // Array of point arrays for left-walking frames
    right: [],               // Array of point arrays for right-walking frames
  };

  // Y-coordinate of the invisible platform the character stands on
  let platformY: number;

  // Animation configuration constants
  const TOTAL_FRAMES = 9;           // Total frames in sprite sheet (8 walk + 1 idle)
  const TOTAL_WALK_FRAMES = 8;      // Number of frames in the walking cycle
  const IDLE_FRAME = 8;             // Index of the idle/standing frame (last frame)
  const FRAME_RATE = 8;             // How many frames per second to animate

  // Sprite sheet layout configuration
  const COLS = 9;                   // Number of columns in sprite sheet (single row of 9)
  const ROWS = 1;                   // Number of rows in sprite sheet
  const FRAME_WIDTH = 200;          // Width of each individual frame in pixels
  const FRAME_HEIGHT = 270;         // Height of each individual frame in pixels
  const SHEET_WIDTH = FRAME_WIDTH * COLS;   // Total width of sprite sheet (1800px)
  const SHEET_HEIGHT = FRAME_HEIGHT;        // Total height of sprite sheet (270px)

  /**
   * React effect hook to detect mobile devices on component mount
   * Sets isMobile state based on window width
   */
  useEffect(() => {
    // Check if viewport width is 768px or less (common mobile breakpoint)
    setIsMobile(window.innerWidth <= 768);
  }, []); // Empty dependency array means this runs once on mount

  /**
   * p5.js preload function - loads images before setup runs
   * This ensures sprite sheets are ready before animation starts
   * @param p5 - p5.js instance
   */
  const preload = (p5: p5Type) => {
    // Load left-walking sprite sheet from public folder
    walkLeftSheet = p5.loadImage('/walk-left-sheetnew.png');
    // Load right-walking sprite sheet from public folder
    walkRightSheet = p5.loadImage('/walkrightsheetnew.png');
  };

  /**
   * p5.js setup function - runs once at start to initialize canvas and character
   * @param p5 - p5.js instance
   * @param canvasParentRef - DOM element to attach canvas to
   */
  const setup = (p5: p5Type, canvasParentRef: Element) => {
    // Create canvas that fills the entire browser window
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);

    // ADJUST PLATFORM HEIGHT: Lower number = higher on screen, higher number = lower on screen
    // 0.4 = 40% down from top (higher up), 0.6 = 60% down (lower down)
    platformY = p5.height * 0.5;

    // Initialize character at center of screen horizontally
    character.x = p5.width / 2;
    // Place character on the platform
    character.y = platformY;
    // Set initial target position to center (no movement at start)
    character.targetX = p5.width / 2;

    // Process sprite sheets to extract ASCII character positions
    extractSilhouettes(p5);
  };

  /**
   * p5.js windowResized function - called whenever browser window is resized
   * Updates canvas size and platform position
   * @param p5 - p5.js instance
   */
  const windowResized = (p5: p5Type) => {
    // Resize canvas to match new window dimensions
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    // Recalculate platform position for new window height
    platformY = p5.height * 0.5;
  };

  /**
   * Extract silhouette data from both sprite sheets
   * Loops through all frames and converts each to an array of ASCII character positions
   * @param p5 - p5.js instance
   */
  const extractSilhouettes = (p5: p5Type) => {
    // Loop through all 9 frames (0-8)
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      // Process left sprite sheet frame and store point data
      framePixelData.left[i] = extractFramePoints(p5, walkLeftSheet, i);
      // Process right sprite sheet frame and store point data
      framePixelData.right[i] = extractFramePoints(p5, walkRightSheet, i);
    }
  };

  /**
   * Extract ASCII character positions from a single frame of a sprite sheet
   * Samples pixels in the frame and creates a point for each non-transparent pixel
   * @param p5 - p5.js instance
   * @param sheet - The sprite sheet image to sample from
   * @param frameNum - Which frame to extract (0-8)
   * @returns Array of {x, y, char} objects representing ASCII character positions
   */
  const extractFramePoints = (p5: p5Type, sheet: p5Type.Image, frameNum: number): Point[] => {
    // Load pixel data from the sprite sheet image into memory
    sheet.loadPixels();

    // Calculate which column this frame is in (since it's a single row, col = frameNum)
    let col = frameNum;
    // Row is always 0 since sprite sheet is a single row
    let row = 0;

    // Array to store the extracted points for this frame
    let points: Point[] = [];

    // Density controls spacing between ASCII characters (higher = fewer chars, more sparse)
    const density = 5;

    // Loop through the frame's pixels vertically, stepping by density
    for (let y = 0; y < FRAME_HEIGHT; y += density) {
      // Loop through the frame's pixels horizontally, stepping by density
      for (let x = 0; x < FRAME_WIDTH; x += density) {
        // Calculate actual pixel position in the full sprite sheet
        let pixelX = col * FRAME_WIDTH + x;
        let pixelY = row * FRAME_HEIGHT + y;

        // Calculate index in the pixels array (4 values per pixel: R, G, B, A)
        let index = (pixelX + pixelY * sheet.width) * 4;

        // Get alpha (transparency) value of this pixel
        let alpha = sheet.pixels[index + 3];

        // If pixel is mostly opaque (part of the silhouette)
        if (alpha > 50) {
          // Add a point with position relative to frame center and random ASCII char
          points.push({
            x: x - FRAME_WIDTH / 2,    // Center horizontally around 0
            y: y - FRAME_HEIGHT / 2,   // Center vertically around 0
            char: randomChar()          // Assign random ASCII character
          });
        }
      }
    }

    // Log how many points were found (useful for debugging)
    console.log(`Frame ${frameNum} extracted ${points.length} points`);

    // Return the array of points for this frame
    return points;
  };

  /**
   * Generate a random ASCII character from the available character set
   * @returns A single random ASCII character
   */
  const randomChar = (): string => {
    // String of all characters that can be used to draw the silhouette
    const chars = "!@#$%^&%^Œ()_+-=[]{}|;:,Ÿ.<>?/~`aæbcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    // Return a random character from the string
    return chars[Math.floor(Math.random() * chars.length)];
  };

  /**
   * p5.js draw function - main animation loop, runs 60 times per second
   * Handles character movement, frame animation, and rendering
   * @param p5 - p5.js instance
   */
  const draw = (p5: p5Type) => {
    // Clear the screen with black background each frame
    p5.background(0);

    // Desktop behavior (not mobile)
    if (!isMobile) {
      // Update target position to follow mouse cursor
      character.targetX = p5.mouseX;

      // Calculate horizontal distance between character and cursor
      let distanceX = character.targetX - character.x;

      // Character is "moving" if cursor is more than 10px away
      let isMoving = p5.abs(distanceX) > 10;

      // If character should be moving
      if (isMoving) {
        // Determine direction based on cursor position
        character.direction = distanceX > 0 ? 'right' : 'left';

        // Calculate movement direction (-1 for left, +1 for right)
        let stepDirection = distanceX > 0 ? 1 : -1;

        // Move character towards cursor at 2.5 pixels per frame
        character.x += stepDirection * 2.5;

        // Increment frame timer to track when to change animation frames
        character.frameTimer++;

        // Check if enough time has passed to show next frame (60 / FRAME_RATE)
        if (character.frameTimer >= 60 / FRAME_RATE) {
          // Advance to next frame, looping back to 0 after frame 7
          character.currentFrame = (character.currentFrame + 1) % TOTAL_WALK_FRAMES;

          // Reset frame timer
          character.frameTimer = 0;

          // Get the point data for the new current frame
          let currentPoints = framePixelData[character.direction][character.currentFrame];

          // If points exist for this frame
          if (currentPoints) {
            // Randomize all the ASCII characters in this frame for animated effect
            for (let point of currentPoints) {
              point.char = randomChar();
            }
          }
        }
      } else {
        // Character is idle (cursor is close)

        // Switch to idle frame (frame 8)
        character.currentFrame = IDLE_FRAME;

        // Continue frame timer even when idle to animate ASCII chars
        character.frameTimer++;

        // Check if enough time has passed to randomize characters
        if (character.frameTimer >= 60 / FRAME_RATE) {
          // Reset frame timer
          character.frameTimer = 0;

          // Get the idle frame's point data
          let idlePoints = framePixelData[character.direction][IDLE_FRAME];

          // If idle points exist
          if (idlePoints) {
            // Randomize all ASCII characters in idle frame for living/glitchy effect
            for (let point of idlePoints) {
              point.char = randomChar();
            }
          }
        }
      }

      // Keep character within bounds (200px from edges)
      character.x = p5.constrain(character.x, 200, p5.width - 200);
    }

    // Update character's vertical position to stay on platform
    character.y = platformY;

    // Draw the ASCII character at its current position and frame
    drawASCIICharacter(p5);
  };

  /**
   * Draw the ASCII character on screen at the current frame and position
   * @param p5 - p5.js instance
   */
  const drawASCIICharacter = (p5: p5Type) => {
    // Safety check: don't draw if frame data hasn't loaded yet
    if (framePixelData.left.length === 0) return;

    // Save current drawing state (position, rotation, scale)
    p5.push();

    // Move drawing origin to character's position
    p5.translate(character.x, character.y);

    // ADJUST CHARACTER HEIGHT: Change this number to make character bigger/smaller
    // 1.5 = current size, 2.0 = bigger, 1.0 = smaller
    p5.scale(1.5);

    // Set text color to #c6f0fc (cyan-ish color)
    p5.fill('#c6f0fc');

    // Don't draw outline around characters
    p5.noStroke();

    // Center text both horizontally and vertically
    p5.textAlign(p5.CENTER, p5.CENTER);

    // Set the size of the ASCII characters
    p5.textSize(4.5);

    // Get the array of points for the current direction and frame
    let points = framePixelData[character.direction][character.currentFrame];

    // If points exist for this frame
    if (points) {
      // Loop through each point and draw its character
      for (let point of points) {
        // Draw the ASCII character at this point's position
        p5.text(point.char, point.x, point.y);
      }
    }

    // Restore previous drawing state
    p5.pop();
  };

  /**
   * Handle character tap on mobile - drops next letter from THIRD LINE
   */
  const handleCharacterTap = () => {
    const word = "THIRDLINE";
    if (droppedLetters.length >= word.length) return; // All letters dropped

    const nextLetter = word[droppedLetters.length];
    const screenWidth = window.innerWidth;
    const characterCenterX = screenWidth / 2;
    const characterCenterY = window.innerHeight * 0.45; // Chest area

    // Create new falling letter
    const newLetter: FallingLetter = {
      char: nextLetter,
      x: characterCenterX + (Math.random() - 0.5) * 20, // Slight randomness
      y: characterCenterY,
      velocityY: 0,
      targetY: window.innerHeight * 0.75, // Land at 75% down screen
      settled: false,
    };

    setDroppedLetters([...droppedLetters, newLetter]);
  };

  /**
   * Animate falling letters on mobile
   */
  useEffect(() => {
    if (!isMobile || droppedLetters.length === 0) return;

    const interval = setInterval(() => {
      setDroppedLetters(prevLetters => {
        let hasLanded = false;

        const updated = prevLetters.map((letter, index) => {
          if (letter.settled) return letter;

          // Apply gravity
          const newVelocityY = letter.velocityY + 1.2; // Gravity
          const newY = letter.y + newVelocityY;

          // Check if letter has landed
          if (newY >= letter.targetY) {
            hasLanded = true;
            return {
              ...letter,
              y: letter.targetY,
              velocityY: 0,
              settled: true,
              // Arrange horizontally to spell THIRD LINE
              x: window.innerWidth / 2 - 100 + (index * 22),
            };
          }

          return {
            ...letter,
            y: newY,
            velocityY: newVelocityY,
          };
        });



        return updated;
      });
    }, 1000 / 60); // 60 FPS

    return () => clearInterval(interval);
  }, [isMobile, droppedLetters.length]);

  /**
   * Mobile version of the animation
   */
  const MobileEnterAnimation = () => {
    const [mobileFrameData, setMobileFrameData] = useState<Point[]>([]);


    // Extract idle frame on mount
    useEffect(() => {
      const img = new Image();
      img.src = '/walk-left-sheetnew.png';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 1800;
        canvas.height = 270;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(1600, 0, 200, 270);
        const points: Point[] = [];
        const density = 5;

        for (let y = 0; y < 270; y += density) {
          for (let x = 0; x < 200; x += density) {
            const index = (x + y * 200) * 4;
            const alpha = imageData.data[index + 3];

            if (alpha > 50) {
              points.push({
                x: x - 100,
                y: y - 135,
                char: randomChar(),
              });
            }
          }
        }

        setMobileFrameData(points);
      };
    }, []);

    // Randomize characters periodically
    useEffect(() => {
      const interval = setInterval(() => {
        setMobileFrameData(prevPoints =>
          prevPoints.map(point => ({
            ...point,
            char: randomChar(),
          }))
        );
      }, 1000 / 8);

      return () => clearInterval(interval);
    }, []);

    // Fade out TAP text after first letter drops
    useEffect(() => {
      if (droppedLetters.length === 1 && showTap) {
        setTapFading(true);
        // Remove from DOM after fade completes
        setTimeout(() => setShowTap(false), 800);
      }
    }, [droppedLetters.length, showTap]);

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
        }}
      >
        {/* ASCII Character - Tappable */}
        <div
          onClick={handleCharacterTap}
          onTouchEnd={(e) => {
            e.preventDefault(); // Prevents double-firing on some devices
            handleCharacterTap();
          }}
          style={{
            position: 'relative',
            width: '300px',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            marginBottom: '60px',
            // Increase touch target
            padding: '20px',
            touchAction: 'manipulation', // Removes 300ms tap delay
            WebkitTapHighlightColor: 'transparent', // Removes blue flash on iOS
          }}
        >
          {/* Draw ASCII character */}
          {mobileFrameData.map((point, i) => (
            <span
              key={i}
              style={{
                position: 'absolute',
                left: `${150 + point.x * 1.5}px`,
                top: `${200 + point.y * 1.5}px`,
                fontSize: '4.5px',
                color: '#c6f0fc',
                fontFamily: 'monospace',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              {point.char}
            </span>
          ))}

          {/* TAP hint - positioned below character, above where letters land */}
          {showTap && (
            <span
              style={{
                position: 'absolute',
                bottom: '-30px',                          // Just below the character
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '11px',
                fontFamily: 'monospace',
                letterSpacing: '3px',
                color: '#c6f0fc',
                opacity: tapFading ? 0 : 1,              // Fade to 0 when tapFading
                transition: tapFading ? 'opacity 0.8s ease-out' : 'none',
                // Pulsating animation via keyframes injected below
                animation: tapFading ? 'none' : 'pulse 1.5s ease-in-out infinite',
              }}
            >
              TAP
            </span>
          )}
        </div>

        {/* Keyframe animation for TAP pulse */}
        <style>{`
          @keyframes pulse {
            0%   { opacity: 0.3; }
            50%  { opacity: 1;   }
            100% { opacity: 0.3; }
          }
        `}</style>

        {/* Falling/Settled Letters */}
        {droppedLetters.map((letter, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              left: `${letter.x}px`,
              top: `${letter.y}px`,
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#c6f0fc',
              fontFamily: 'monospace',
              textShadow: '0 0 10px #c6f0fc',
            }}
          >
            {letter.char}
          </span>
        ))}

        {/* Enter Site Button */}
        <button
          onClick={onComplete}
          style={{
            position: 'absolute',
            bottom: '80px',
            padding: '12px 32px',
            fontSize: '16px',
            fontWeight: '500',
            color: '#c6f0fc',
            backgroundColor: 'transparent',
            border: '2px solid #c6f0fc',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: 'monospace',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
          }}
        >
          ENTER SITE
        </button>
      </div>
    );
  };

  /**
   * Render the component
   * Creates a full-screen container with the p5.js sketch
   */
  return (
    // Fixed position container covering entire viewport
    <div style={{
      position: 'fixed',      // Fixed positioning to stay in place
      top: 0,                 // Align to top of viewport
      left: 0,                // Align to left of viewport
      width: '100vw',         // Full viewport width
      height: '100vh',        // Full viewport height
      zIndex: 9999            // High z-index to appear above other content
    }}>
      {isMobile ? (
        <MobileEnterAnimation />
      ) : (
        <>
          {/* p5.js Sketch component with required lifecycle functions */}
          <Sketch
            preload={preload}              // Load images before setup
            setup={setup}                  // Initialize canvas and character
            draw={draw}                    // Main animation loop
            windowResized={windowResized}  // Handle window resize events
          />

          {/* WORDMARK - Top Left */}
          <div
            className="!mx-10 !mt-6"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 10000,
            }}
          >
            <img
              src="/thirdlinelogowhite.svg"
              alt="Third Line Logo"
              width={250}
              height={40}
              style={{
                height: "auto",

              }}
            />
          </div>

          {/* Enter Site Button */}
          <button
            onClick={onComplete}
            onTouchEnd={(e) => {
              e.preventDefault();
              onComplete?.();
            }}
            style={{
              position: 'absolute',
              bottom: '80px',
              padding: '20px 48px', // Bigger tap area
              fontSize: '16px',
              fontWeight: '500',
              color: '#c6f0fc',
              backgroundColor: 'transparent',
              border: '2px solid #c6f0fc',
              borderRadius: '4px',
              cursor: 'pointer',
              fontFamily: 'monospace',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              WebkitTapHighlightColor: 'transparent', // Removes blue flash on iOS
              touchAction: 'manipulation', // Removes 300ms delay on mobile
            }}
          >
            ENTER SITE
          </button>
    </>
  )
}
    </div >
  );
}
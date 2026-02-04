'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GridContainer } from "../ui/GridContainer";
import { ProjectDetails } from '../ui/ProjectDetails';

export default function IndexTable() {
    const [expandedRow, setExpandedRow] = useState<number | null>(1);

    const rows = [
        { id: 1, year: '2026', client: 'Jaffa Saba', type: 'Website', tech: 'Shopify' },
        { id: 2, year: '2025', client: 'Third Line', type: 'Website/Identity', tech: 'Next.js, Tailwind' },
        { id: 3, year: '2025', client: '730Carlina', type: 'Website', tech: 'Shopify' },
        { id: 4, year: '2024', client: 'SkynMaps', type: 'Website', tech: 'Shopify' },
    ];

    const toggleRow = (id: number) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    return (
        <section className="mx-6! mt-[120px]! mb-8!">
            {/* Header Row */}
            <GridContainer >
                <div className="col-span-3 text-left uppercase my-1!">
                    <p className="mx-4!">year</p>
                </div>
                <div className="col-span-3 text-left uppercase">client</div>
                <div className="col-span-3 text-left uppercase">type</div>
                <div className="col-span-3 text-left uppercase">technology/platform</div>
            </GridContainer>

            {/* Data Rows */}
            {rows.map((row) => (
                <div key={row.id}>
                    <GridContainer
                        className="border-t! border-[#d9d9d9]! cursor-pointer hover:text-[#b1b1b1]"
                        onClick={() => toggleRow(row.id)}
                    >
                        <div className="col-span-3 text-left my-1.25!">
                            <p className="mx-4!">{row.year}</p>
                        </div>
                        <div className="col-span-3 text-left my-1.25!">{row.client}</div>
                        <div className="col-span-3 text-left my-1.25!">{row.type}</div>
                        <div className="col-span-3 text-left my-1.25!">{row.tech}</div>
                    </GridContainer>

                    {/* Dropdown Content */}
                    <AnimatePresence>
                        {expandedRow === row.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                    duration: 0.48,
                                    ease: [0.71, 0.04, 0.40, 0.11],
                                }}
                                className="overflow-hidden"
                            >
                                <div className="mx-6 my-4 border-2 border-blue-500 p-4">
                                    <ProjectDetails projectId={row.id} />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}

            <div className='border-t! border-[#d9d9d9]! pt-2!'>
                <span className="ml-4! ">
                    LAST UPDATE:
                </span>
                <span className='ml-1.5!'>
                    04 FEB 26
                </span>
            </div>

        </section>
    );
}
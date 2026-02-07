'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { GridContainer } from '../ui/GridContainer'
import { ProjectDetails } from '../ui/ProjectDetails'
import { PROJECT_LIST } from '@/components/ui/projects'

export default function IndexTable() {
  const [expandedRow, setExpandedRow] = useState<number | null>(2)

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id)
  }

  return (
    <section className=" !mt-[120px] !mb-8">
      {/* Header Row */}
      <GridContainer className="!mx-6">
        <div className="col-span-3 mid:col-span-4 uppercase !my-1 mobile:hidden">
          <p className="!mx-4">year</p>
        </div>

        <div className="col-span-3 mid:col-span-4 mobile:col-span-6 uppercase mobile:!my-1">
          <p className="mobile:!mx-4">client</p>
        </div>

        <div className="col-span-3 mid:col-span-4 mobile:col-span-6 uppercase">
          type
        </div>

        <div className="col-span-3 uppercase hidden desktop:block">
          technology/platform
        </div>
      </GridContainer>

      {/* Data Rows */}
      {PROJECT_LIST.map((project) => (
        <div key={project.id}>
          <GridContainer
            className=" !mx-6 !border-t !border-[#d9d9d9] cursor-pointer hover:text-[#b1b1b1]"
            onClick={() => toggleRow(project.id)}
          >
            <div className="col-span-3 mid:col-span-4 !my-1.25 mobile:hidden">
              <p className="!mx-4">{project.year}</p>
            </div>

            <div className="col-span-3 mid:col-span-4 mobile:col-span-6 !my-1.25">
              <p className="mobile:!mx-4">{project.client}</p>
            </div>

            <div className="col-span-3 mid:col-span-4 mobile:col-span-6 !my-1.25">
              {project.type}
            </div>

            <div className="col-span-3 !my-1.25 hidden desktop:block">
              {project.tech}
            </div>
          </GridContainer>

          <AnimatePresence>
            {expandedRow === project.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.48,
                  ease: [0.71, 0.04, 0.4, 0.11],
                }}
                className="overflow-hidden"
              >
                <div className=" !mx-6 my-4 border-2 border-blue-500 p-4">
                  <ProjectDetails projectId={project.id} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      <div className=" !mx-6 !border-t !border-[#d9d9d9] !pt-2">
        <span className="!ml-4">LAST UPDATE:</span>
        <span className="!ml-1.5">04 FEB 26</span>
      </div>
    </section>
  )
}
"use client";
import NewProjectCard from "@/app/components/newProjects/NewProjectCard";
import CompanyBadge from "@/app/components/ui/CompanyBadge";
import Skills from "@/app/components/ui/Skills";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaGlobe, FaYoutube } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const NewProjectCardPopup = ({ data }) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="text-left">
        <NewProjectCard data={data} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70"
            />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-3xl h-[95vh] bg-[#0a0a0a] text-white rounded-xl border border-white/[0.1] relative p-4 overflow-y-auto"
              >
                <button
                  className="absolute top-2 right-2 bg-black opacity-50 p-1 rounded-lg hover:opacity-100 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <IoMdClose className="h-6 w-6 opacity-80 transition-all" />
                </button>
                <div className="flex flex-col gap-4">
                  <Image
                    src={data.image}
                    width={1280}
                    height={720}
                    alt={data.title}
                    className="rounded-lg object-cover object-top border border-white/[0.1] aspect-video w-full!"
                  />
                  <div className="flex flex-col gap-3">
                    <DialogTitle className="text-2xl font-bold">
                      {data.title}
                    </DialogTitle>
                    <div className="flex gap-2 items-center">
                      <span className="bg-[#1F1F23] h-8 px-2 rounded-lg w-fit text-sm text-white/80 flex items-center">
                        {data.date}
                      </span>
                      <CompanyBadge company={data.company} />
                    </div>
                    <Skills skills={data.skills} fullList />
                    <div />
                    {data.description && (
                      <p className="opacity-80">{data.description}</p>
                    )}
                    {data.highlights && data.highlights.length > 0 && (
                      <ul className="list-disc list-inside opacity-80">
                        {data.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-2 flex gap-2 flex-wrap">
                      {data.links.github && (
                        <LinkButton href={data.links.github} icon={FaGithub}>
                          GitHub
                        </LinkButton>
                      )}
                      {data.links.youtube && (
                        <LinkButton href={data.links.youtube} icon={FaYoutube}>
                          YouTube
                        </LinkButton>
                      )}
                      {data.links.live && (
                        <LinkButton href={data.links.live} icon={FaGlobe}>
                          Live
                        </LinkButton>
                      )}
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default NewProjectCardPopup;

const LinkButton = ({ href, icon: Icon, children }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#010409] h-10 px-3 rounded-lg w-fit text-white flex items-center gap-2 transition-all border border-white/[0.1] hover:border-white/50"
    >
      <Icon />
      {children}
    </Link>
  );
};

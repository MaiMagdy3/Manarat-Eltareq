"use client";

import { useState } from "react";
import { roadmapLevels } from "@/lib/data/research-roadmap";

export default function RoadmapLevels() {
  const [activeId, setActiveId] = useState(roadmapLevels[0].id);
  const active = roadmapLevels.find((l) => l.id === activeId)!;

  return (
    <div>
      <div role="tablist" aria-label="مستوى الخطة" className="flex flex-wrap gap-2 mb-8">
        {roadmapLevels.map((level) => {
          const selected = level.id === activeId;
          return (
            <button
              key={level.id}
              type="button"
              role="tab"
              id={`tab-${level.id}`}
              aria-selected={selected}
              aria-controls={`panel-${level.id}`}
              onClick={() => setActiveId(level.id)}
              className={`px-4 py-2 rounded-full text-sm font-display font-semibold transition-colors ${
                selected
                  ? "bg-beacon text-deep"
                  : "border border-border text-muted hover:text-ink hover:border-beacon"
              }`}
            >
              {level.levelLabel}
              <span className="mx-2 opacity-60 font-mono text-xs">{level.arabicTag}</span>
            </button>
          );
        })}
      </div>

      {roadmapLevels.map((level) => (
        <div
          key={level.id}
          role="tabpanel"
          id={`panel-${level.id}`}
          aria-labelledby={`tab-${level.id}`}
          hidden={level.id !== activeId}
        >
          <p className="text-muted font-body mb-8 max-w-2xl">{level.description}</p>

          <div className="space-y-8">
            {level.groups.map((group) => (
              <div key={group.heading}>
                <h3 className="font-display font-bold text-ink text-lg mb-3">{group.heading}</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-xl border border-border bg-panel p-4 flex flex-col gap-2"
                    >
                      <span className="text-ink font-body text-sm leading-relaxed">
                        {item.title}
                      </span>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-beacon text-sm font-mono hover:underline w-fit"
                        >
                          فتح المصدر ↗
                        </a>
                      ) : (
                        <span className="text-xs text-muted font-body italic">{item.note}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

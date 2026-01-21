import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();

  const cleanSlug = (slug ?? "").trim().toLowerCase();
  const project = projects.find(
    (p) => p.slug.trim().toLowerCase() === cleanSlug
  );

  // Build the image list for the carousel
  const images = useMemo(() => {
    if (!project) return [];
    if (project.gallery && project.gallery.length) return project.gallery;
    if (project.heroImage) return [project.heroImage];
    if (project.thumbnail) return [project.thumbnail];
    return [];
  }, [project]);

  const [index, setIndex] = useState(0);

  const hasMany = images.length > 1;

  const prev = () => {
    if (!images.length) return;
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    if (!images.length) return;
    setIndex((i) => (i + 1) % images.length);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (!hasMany) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 8000);

    return () => window.clearInterval(id);
  }, [hasMany, images.length]);

  if (!project) {
    return (
      <div style={{ padding: 40 }}>
        <Link to="/">← Back to Home</Link>
        <h1 style={{ marginTop: 20 }}>Project not found</h1>
        <p>
          Slug: <strong>{slug}</strong>
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "48px 6vw" }}>
      {/* BACK TO HOME */}
<div
  style={{
    maxWidth: 1200,
    margin: "0 auto 24px",
    paddingTop: 12,
  }}
>
  <Link
    to="/"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: 14,
      color: "rgba(255,255,255,0.85)",
      textDecoration: "none",
      padding: "6px 10px",
      borderRadius: 8,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      backdropFilter: "blur(6px)",
    }}
  >
    ← Back to Home
  </Link>
</div>


      {/* BIG IMAGE HERO */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          borderRadius: 24,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.06)",
          boxShadow: "0 30px 70px rgba(0,0,0,0.5)",
        }}
      >
        {images.length > 0 && (
          <img
            src={images[index]}
            alt={`${project.title} ${index + 1}`}
            style={{
              width: "100%",
              height: "min(60vh, 520px)",
              objectFit: "cover",
              display: "block",
            }}
          />
        )}

        {/* LEFT / RIGHT ARROWS */}
        {hasMany && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              style={arrowStyle("left")}
              onMouseEnter={(e) => {
  e.currentTarget.style.opacity = "1";
  e.currentTarget.style.background = "rgba(0,0,0,0.55)";
}}
onMouseLeave={(e) => {
  e.currentTarget.style.opacity = "0.9";
  e.currentTarget.style.background = "rgba(0,0,0,0.40)";
}}
onMouseDown={(e) => {
  e.currentTarget.style.transform = "translateY(-50%) scale(0.96)";
}}
onMouseUp={(e) => {
  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
}}
            >
             <span style={{ transform: "translateX(-1px)" }}>‹</span>
            </button>

            <button
              onClick={next}
              aria-label="Next image"
              style={arrowStyle("right")}
              onMouseEnter={(e) => {
  e.currentTarget.style.opacity = "1";
  e.currentTarget.style.background = "rgba(0,0,0,0.55)";
}}
onMouseLeave={(e) => {
  e.currentTarget.style.opacity = "0.9";
  e.currentTarget.style.background = "rgba(0,0,0,0.40)";
}}
onMouseDown={(e) => {
  e.currentTarget.style.transform = "translateY(-50%) scale(0.96)";
}}
onMouseUp={(e) => {
  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
}}
            >
             <span style={{ transform: "translateX(1px)" }}>›</span>
            </button>

            {/* small dots */}
            <div
              style={{
                position: "absolute",
                bottom: 14,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 8,
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {images.map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background:
                      i === index ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* HEADING UNDER IMAGE */}
      <div style={{ maxWidth: 1200, margin: "24px auto 0" }}>
        <h1 style={{ fontSize: 56, lineHeight: 1.05, margin: "10px 0" }}>
          {project.title}
        </h1>
        <p style={{ fontSize: 18, opacity: 0.9, maxWidth: 900 }}>
          {project.summary}
        </p>

        <div style={{ display: "flex", gap: 14, marginTop: 18, flexWrap: "wrap" }}>
          {project.pdf && (
            <a
              href={project.pdf}
              download
              style={btnStyle(true)}
            >
              Download PDF
            </a>
          )}
          <Link to="/" style={btnStyle(false)}>
            View other projects
          </Link>
        </div>

        {/* OVERVIEW BOX */}
        <div
          style={{
            marginTop: 28,
            padding: 26,
            borderRadius: 18,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <h2 style={{ margin: 0, marginBottom: 10 }}>Overview</h2>
          <p style={{ margin: 0, opacity: 0.9 }}>{project.details}</p>
        </div>
      </div>
    </div>
  );
}

function arrowStyle(side: "left" | "right"): React.CSSProperties {
  const isLeft = side === "left";

  return {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",

    // KEY: keep it inside image
    [side]: 18,
    

    width: 52,
    height: 52,
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.22)",
    background: "rgba(0,0,0,0.40)",
    color: "rgba(255,255,255,0.95)",
    display: "grid",
    placeItems: "center",
    fontSize: 34,
    fontWeight: 800,
    lineHeight: "1",
    cursor: "pointer",
    userSelect: "none",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
    transition: "transform 160ms ease, background 160ms ease, opacity 160ms ease",
    opacity: 0.9,
  };
}



function btnStyle(primary: boolean): React.CSSProperties {
  return {
    padding: "12px 16px",
    borderRadius: 14,
    textDecoration: "none",
    color: primary ? "black" : "white",
    background: primary ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.14)",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
  };
}

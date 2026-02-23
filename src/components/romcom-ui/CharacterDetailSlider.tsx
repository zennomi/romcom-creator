"use client";

import { Avatar, Column, Flex, IconButton, Row, Text } from "@once-ui-system/core";
import { useCallback, useEffect, useRef, useState } from "react";
import { AffectionBar } from "./AffectionBar";
import { MemoryCard } from "./MemoryCard";
import type { CharacterProfile } from "./types";

interface CharacterDetailSliderProps {
  characters: CharacterProfile[];
}

export function CharacterDetailSlider({ characters }: CharacterDetailSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrollingProgrammatically = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);
  const [scrollSnapType, setScrollSnapType] = useState<"x mandatory" | "none">("x mandatory");

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isScrollingProgrammatically.current = true;
    const slideWidth = container.clientWidth;
    container.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
    setTimeout(() => {
      isScrollingProgrammatically.current = false;
      setActiveIndex(index);
    }, 500);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrollingProgrammatically.current) return;
      const scrollLeft = container.scrollLeft;
      const slideWidth = container.clientWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < characters.length) {
        setActiveIndex(newIndex);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = slideRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && index !== activeIndex) {
              setActiveIndex(index);
            }
          }
        }
      },
      { root: container, threshold: 0.5 },
    );

    for (const slide of slideRefs.current) {
      if (slide) observer.observe(slide);
    }
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex, characters.length]);

  useEffect(() => {
    if (!isDragging) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const walk = (dragStartX.current - e.pageX) * 1.5;
      container.scrollLeft = scrollStartLeft.current + walk;
    };

    const handleMouseUp = () => {
      const slideWidth = container.clientWidth;
      const nearestIndex = Math.round(container.scrollLeft / slideWidth);
      container.scrollTo({
        left: nearestIndex * slideWidth,
        behavior: "smooth",
      });
      setActiveIndex(nearestIndex);
      setIsDragging(false);
      setTimeout(() => setScrollSnapType("x mandatory"), 300);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsDragging(true);
    setScrollSnapType("none");
    dragStartX.current = e.pageX;
    scrollStartLeft.current = container.scrollLeft;
  };

  if (characters.length === 0) return null;

  return (
    <Column fillWidth fillHeight style={{ isolation: "isolate", minHeight: "20rem" }}>
      <Flex
        fillWidth
        fillHeight
        position="relative"
        radius="l"
        border="neutral-alpha-weak"
        overflow="hidden"
      >
        <Row
          ref={scrollContainerRef}
          fillWidth
          fillHeight
          onMouseDown={handleMouseDown}
          overflowX="auto"
          style={{
            scrollSnapType,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
          }}
        >
          {characters.map((character, index) => (
            <Flex
              key={character.id}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              fillWidth
              fillHeight
              style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
                flexShrink: 0,
              }}
            >
              <Column fillWidth gap="16" padding="16">
                <Column fillWidth horizontal="center" gap="12">
                  <Avatar
                    value={character.previewImage ? undefined : character.name}
                    src={character.previewImage}
                    size="l"
                  />
                  <Column horizontal="center" gap="4">
                    <Text variant="heading-strong-s">{character.name}</Text>
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      {character.archetype}
                    </Text>
                  </Column>
                </Column>

                <Column
                  fillWidth
                  border="neutral-alpha-medium"
                  background="neutral-alpha-weak"
                  radius="m"
                  padding="12"
                  gap="12"
                  transition="micro-medium"
                >
                  <AffectionBar label="Hảo cảm" value={character.affection} />
                </Column>

                <MemoryCard
                  character={character}
                  background="accent-alpha-weak"
                  border="accent-alpha-medium"
                />
              </Column>
            </Flex>
          ))}
        </Row>

        {characters.length > 1 && (
          <>
            {activeIndex > 0 && (
              <Flex
                position="absolute"
                left="16"
                zIndex={1}
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                <Flex radius="l" background="surface" overflow="hidden">
                  <IconButton
                    onClick={() => scrollToIndex(activeIndex - 1)}
                    variant="secondary"
                    icon="chevronLeft"
                    aria-label="Previous slide"
                  />
                </Flex>
              </Flex>
            )}
            {activeIndex < characters.length - 1 && (
              <Flex
                position="absolute"
                right="16"
                zIndex={1}
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                <Flex radius="l" background="surface" overflow="hidden">
                  <IconButton
                    onClick={() => scrollToIndex(activeIndex + 1)}
                    variant="secondary"
                    icon="chevronRight"
                    aria-label="Next slide"
                  />
                </Flex>
              </Flex>
            )}
          </>
        )}
      </Flex>

      {characters.length > 1 && (
        <Row gap="8" fillWidth horizontal="center" paddingX="16" paddingTop="12">
          {characters.map((character, index) => (
            <button
              key={character.id}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to ${character.name}`}
              style={{
                background:
                  activeIndex === index ? "var(--neutral-on-background-strong)" : "transparent",
                border:
                  activeIndex === index
                    ? "2px solid var(--neutral-on-background-strong)"
                    : "2px solid var(--neutral-alpha-medium)",
                transition: "background 0.3s ease, transform 0.3s ease, border 0.3s ease",
                transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
                overflow: "hidden",
                borderRadius: "50%",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <Avatar
                value={character.previewImage ? undefined : character.name}
                src={character.previewImage}
                size="m"
              />
            </button>
          ))}
        </Row>
      )}
    </Column>
  );
}

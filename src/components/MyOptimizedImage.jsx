import { useEffect } from "react";

export const MyOptimizedImage = ({
  srcDesk,
  srcTablet = srcDesk,
  srcMob = srcDesk,
  children,
  preLoad = false,
}) => {
  // Preload the largest image (desktop version in this case)
  useEffect(() => {
    if (!preLoad) return;

    const preloadLink = document.createElement("link");
    preloadLink.href = srcDesk;
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    document.head.appendChild(preloadLink);

    return () => {
      document.head.removeChild(preloadLink);
    };
  }, [srcDesk, preLoad]);

  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={srcDesk} type="image/webp" />
      <source media="(min-width: 768px)" srcSet={srcTablet} type="image/webp" />
      <source srcSet={srcMob} type="image/webp" />
      {children}
    </picture>
  );
};

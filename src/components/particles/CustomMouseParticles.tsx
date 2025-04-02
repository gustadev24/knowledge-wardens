'use client';

import { useEffect, useRef } from 'react';
import Proton, {
  Alpha, Color, Emitter, Life, Mass, Radius, RandomDrift, Rate, Scale, Span, Velocity, Gravity,
  DomRenderer,
} from 'proton-engine';
import RAFManager from 'raf-manager';

export default function CustomMouseParticles({
  num = 3,
  color = ['#37B8EF', '#2F9ECD', '#39BEF7', '#2783AB', '#1F6989', '#37B8EF', '#2F9ECD', '#39BEF7', '#2783AB', '#1F6989', '#FFFFFF', '#F7EF39'],
  radius,
  life,
  tha,
  alpha,
  v = 0.65,
  g,
}: {
  num?: number,
  color?: string[],
  radius?: number,
  life?: number,
  tha?: number[],
  alpha?: number,
  v?: number,
  g?: number,
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // sera como un portal?
    // document.body.appendChild(container);

    const proton = new Proton();

    const emitter = new Emitter();
    emitter.rate = new Rate(num);
    emitter.damping = 0.008;
    const particleLife = life ? new Life(life) : new Life(0.2, 0.5);
    const particleAlpha = alpha || new Span(0.25, 0.55);
    const particleTha = tha ? new Span(tha[0], tha[1]) : new Span(0, 360);
    let particleRadius = new Radius(2, 5);
    if (radius) {
      particleRadius = new Radius(radius * 0.8, radius);
    }

    emitter.addInitialize(new Mass(1));
    emitter.addInitialize(particleRadius);
    emitter.addInitialize(particleLife);
    emitter.addInitialize(new Velocity(new Span(v), particleTha, 'polar'));

    emitter.addBehaviour(new Alpha(particleAlpha));
    emitter.addBehaviour(new Color(color));
    emitter.addBehaviour(new Scale(1, 0.1));
    emitter.addBehaviour(new RandomDrift(10, 10, 0.2));
    if (g) {
      emitter.addBehaviour(new Gravity(g));
    }

    proton.addEmitter(emitter);

    if (containerRef.current) {
      const renderer = new DomRenderer(containerRef.current);
      proton.addRenderer(renderer);
    }

    const ease = 0.7;
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      emitter.p.x += (x - emitter.p.x) * ease;
      emitter.p.y += (y - emitter.p.y) * ease;
      emitter.emit('once');
    };

    document.body.addEventListener('mousemove', handleMouseMove, false);

    const renderLoop = () => {
      if (proton) proton.update();
    };
    RAFManager.add(renderLoop);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove, false);
      RAFManager.remove(renderLoop);
      if (proton) {
        proton.destroy();
      }
    };
  }, [num, color, radius, life, tha, alpha, v, g, containerRef]);

  return (
    <div
      ref={containerRef}
      // eslint-disable-next-line no-bitwise
      id={`mouse_ps_${(Math.random() * 999999) >> 0}`}
      className="fixed left-0 top-0 z-[9999] pointer-events-none"
    />
  );
}

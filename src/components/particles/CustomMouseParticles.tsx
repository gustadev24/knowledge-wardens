'use client';

import React, { useEffect, useRef } from 'react';
import Proton from 'proton-engine';
import RAFManager from 'raf-manager';

export default function CustomMouseParticles({
  num = 3,
  color = ['#37B8EF', '#2F9ECD', '#39BEF7', '#2783AB', '#1F6989', '#37B8EF', '#2F9ECD', '#39BEF7', '#2783AB', '#1F6989', '#FFFFFF', '#F7EF39'],
  radius,
  cull,
  life,
  tha,
  alpha,
  v = 0.65,
  g,
}) {
  const containerRef = useRef(null);
  const protonRef = useRef(null);
  const emitterRef = useRef(null);

  useEffect(() => {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = '0px';
    container.style.top = '0px';
    container.style.zIndex = '9999';
    container.style.pointerEvents = 'none';
    container.id = `mouse_ps_${(Math.random() * 999999) >> 0}`;
    document.body.appendChild(container);
    containerRef.current = container;

    const proton = new Proton();
    protonRef.current = proton;

    const emitter = new Proton.Emitter();
    emitter.rate = new Proton.Rate(num);
    emitter.damping = 0.008;
    const particleLife = life ? new Proton.Life(life) : new Proton.Life(0.2, 0.5);
    const particleAlpha = alpha || Proton.getSpan(0.25, 0.55);
    const particleTha = tha ? new Proton.Span(tha[0], tha[1]) : new Proton.Span(0, 360);
    let particleRadius = new Proton.Radius(2, 5);
    if (radius) {
      particleRadius = new Proton.Radius(radius * 0.8, radius);
    }

    emitter.addInitialize(new Proton.Mass(1));
    emitter.addInitialize(particleRadius);
    emitter.addInitialize(particleLife);
    emitter.addInitialize(new Proton.Velocity(new Proton.Span(v), particleTha, 'polar'));

    emitter.addBehaviour(new Proton.Alpha(particleAlpha));
    emitter.addBehaviour(new Proton.Color(color));
    emitter.addBehaviour(new Proton.Scale(1, 0.1));
    emitter.addBehaviour(new Proton.RandomDrift(10, 10, 0.2));
    if (g) {
      emitter.addBehaviour(new Proton.G(parseFloat(g)));
    }

    proton.addEmitter(emitter);
    emitterRef.current = emitter;

    const renderer = new Proton.DomRenderer(container);
    proton.addRenderer(renderer);

    const ease = 0.7;
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      emitter.p.x += (x - emitter.p.x) * ease;
      emitter.p.y += (y - emitter.p.y) * ease;
      emitter.emit('once');
    };

    document.body.addEventListener('mousemove', handleMouseMove, false);

    const renderLoop = () => {
      proton && proton.update();
    };
    RAFManager.add(renderLoop);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove, false);
      RAFManager.remove(renderLoop);
      if (proton) {
        proton.destroy();
      }
      if (container) {
        document.body.removeChild(container);
      }
    };
  }, [num, color, radius, life, tha, alpha, v, g]);

  return null;
}

const scenes = document.querySelectorAll('.scene');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  scenes.forEach((scene, index) => {
    const offsetTop = scene.offsetTop;
    const sceneHeight = scene.offsetHeight;

    // Só ativa parallax se estiver dentro da cena visível
    if (scrollTop >= offsetTop - window.innerHeight && scrollTop < offsetTop + sceneHeight) {
      const layers = scene.querySelectorAll('.layer');
      const progress = (scrollTop - offsetTop) / sceneHeight;

      layers.forEach((layer, i) => {
        const speed = (i + 1) * 20; // velocidade por camada
        const direction = getLayerDirection(index, i); // direção personalizada
        const x = direction.x * progress * speed;
        const y = direction.y * progress * speed;

        layer.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
  });
});

// Define direções personalizadas por cena/camada
function getLayerDirection(sceneIndex, layerIndex) {
  // Exemplo simples (podes ajustar conforme tua história)
  const directions = [
    // Cena 1: move horizontalmente
    [ {x: -1, y: 0}, {x: -0.5, y: 0}, {x: 0, y: 0}, {x: 0.5, y: 0}, {x: 1, y: 0} ],
    // Cena 2: move verticalmente
    [ {x: 0, y: -1}, {x: 0, y: -0.5}, {x: 0, y: 0}, {x: 0, y: 0.5}, {x: 0, y: 1} ],
    // Cena 3: diagonal esquerda cima
    [ {x: -1, y: -1}, {x: -0.5, y: -0.5}, {x: 0, y: 0}, {x: 0.5, y: 0.5}, {x: 1, y: 1} ],
    // Cena 4: diagonal direita cima
    [ {x: 1, y: -1}, {x: 0.5, y: -0.5}, {x: 0, y: 0}, {x: -0.5, y: 0.5}, {x: -1, y: 1} ],
    // Cena 5: aleatório
    [ {x: -1, y: 1}, {x: 1, y: -1}, {x: 0.5, y: 0.5}, {x: -0.5, y: -0.5}, {x: 0, y: 0} ]
  ];

  return directions[sceneIndex][layerIndex];
}

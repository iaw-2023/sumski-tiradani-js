function ImageHover({ imagen_frente, imagen_atras }) {
  return (
    <div className="relative">
      <img
        src={"data:image/png;base64," + imagen_frente}
        className="rounded-md transition-transform duration-300 transform hover:scale-100"
        alt="Camiseta"
      />
      <img
        src={"data:image/png;base64," + imagen_atras}
        className="rounded-md absolute top-0 left-0 opacity-0 transition-opacity duration-300 transform hover:opacity-100"
        alt="Camiseta"
      />
    </div>
  );
}

export default ImageHover;

export default function GoogleMap() {
    return (
      <div className="aspect-[2/1] h-120 w-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416.0571919604636!2d2.861136613418448!3d36.490189927188815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0954c12aa995%3A0x5e9e7796c88e339c!2sFVQ6%2BWGG%2C%20Ouled%20Ya%C3%AFch!5e0!3m2!1sfr!2sdz!4v1744599212413!5m2!1sfr!2sdz&z=12"  
          className="w-full h-full"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    );
  }
  
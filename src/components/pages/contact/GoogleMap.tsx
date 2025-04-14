export default function GoogleMap() {
  return (
    <div className="aspect-[2/1] w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1288.3903746345609!2d2.8527784!3d36.4961343!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sdz!4v1742107248442!5m2!1sar!2sdz"
        className="w-full h-full"
        loading="lazy"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
    </div>
  );
}

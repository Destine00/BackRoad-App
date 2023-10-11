function MyService({serviceTitle, serviceText}) {
  return (
    <article className="service">
      <span className="service-icon">
        <i className="fas fa-wallet fa-fw"></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{serviceTitle}</h4>
        <p className="service-text">
          {serviceText}
        </p>
      </div>
    </article>
  );
}
export default MyService
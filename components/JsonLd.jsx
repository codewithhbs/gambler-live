// Renders one or more schema.org objects as JSON-LD.
export default function JsonLd({ data }) {
  const list = Array.isArray(data) ? data : [data];
  return list.map((item, i) => (
    <script
      key={i}
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
    />
  ));
}

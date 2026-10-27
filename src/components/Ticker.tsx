const items = [
  "Laravel",
  "PHP",
  "Vue",
  "React",
  "Next.js",
  "Livewire",
  "Tailwind",
  "Shopify",
  "Magento",
  "AWS",
  "Docker",
  "MySQL",
  "PostgreSQL",
  "Arduino",
  "Electron",
  "REST APIs",
];

function TickerRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="ticker-track">
      {items.map((item) => (
        <span key={`${hidden ? "b" : "a"}-${item}`} className="ticker-item">
          {item}
          <span className="ticker-dot"></span>
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="overflow-hidden border-y border-line bg-paper py-4">
      <div className="ticker">
        <TickerRow />
        <TickerRow hidden />
      </div>
    </div>
  );
}

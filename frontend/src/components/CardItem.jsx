import "./CardItem.css";

export default function CardItem() {
  return (
    <div className="flex w-full justify-center text-center">
      <div className="branch-col mx-4">
        <img src="/images/mumbai.jpg" alt="Mumbai_image" />
        <div className="layer">
          <h3>MUMBAI</h3>
        </div>
      </div>
      <div className="branch-col mx-4">
        <img src="/images/delhi.jpg" alt="Delhi_image" />
        <div className="layer">
          <h3>NEW DELHI</h3>
        </div>
      </div>
      <div className="branch-col mx-4">
        <img src="/images/agra.jpg" alt="Agra_image" />
        <div className="layer">
          <h3>AGRA</h3>
        </div>
      </div>
    </div>
  );
}

import { items } from "../../public/items.json";

export default function CategoryComponent() {
  const { category } = items;

  return (
    <div className="container">
      <div className="category-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 ">
          <div className="category">
            <div className="img-circle acute-border">
              <img src="images/acute.png" />
            </div>
            <div className="title">Acute</div>
            <div className="text">
              Products to care for your specific symptoms.
            </div>
          </div>
          <div className="category">
            <div className="img-circle preventive-border">
              <img src="images/preventive.png" />
            </div>
            <div className="title">Preventative Care</div>
            <div className="text">
              Products to help you prepare for anything.
            </div>
          </div>
          <div className="category">
            <div className="img-circle day-border">
              <img src="images/every_day.png" />
            </div>
            <div className="title">Every Day Care</div>
            <div className="text">Products to support your daily routine.</div>
          </div>
          <div className="category">
            <div className="img-circle diagnostic-border">
              <img src="images/diagnostic.png" />
            </div>
            <div className="title">Diagnostic Care</div>
            <div className="text">Tools to monitor your health.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

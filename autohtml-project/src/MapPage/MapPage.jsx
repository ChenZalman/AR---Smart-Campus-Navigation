import "./MapPage.css";

export const MapPage = ({ className, ...props }) => {
  return (
    <div className={"map-page " + className}>
      <top-view-page className="top-view-page"></top-view-page>
      <img className="campus-map-1" src="campus-map-10.png" />
      <div className="building-1-button2"></div>
      <div className="_1">1 </div>
      <div className="building-3-button2"></div>
      <div className="_3">3 </div>
      <div className="building-3-button3"></div>
      <div className="_4">4 </div>
      <div className="building-3-button4"></div>
      <div className="_5">5 </div>
      <div className="building-3-button5"></div>
      <div className="_7">7 </div>
      <div className="building-6-button2"></div>
      <div className="_6">6 </div>
      <div className="building-3-button6"></div>
      <div className="_8">8 </div>
      <div className="building-2-button2"></div>
      <div className="_2">2 </div>
      <div className="student-dormitories-button">
        <div className="student-dormitories-button2"></div>
      </div>
      <img
        className="dave-removebg-preview-1"
        src="dave-removebg-preview-10.png"
      />
    </div>
  );
};

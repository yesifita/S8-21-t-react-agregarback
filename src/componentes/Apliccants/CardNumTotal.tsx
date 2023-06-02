
function CardNumTotal({title, value, icon}) {
  return (
    <div className="flex justify-center bg-secundaryGreyLight h-32 rounded-xl relative">
      <div className="absolute top-0 left-0 text-2xl p-3 text-secundaryViolet">
        {icon}
      </div>
      <div className="flex items-center">
        <p className="text-5xl text-secundaryViolet font-bold border-r-2 border-primaryBlueDark py-3 pr-2">
          {value}
        </p>
        <p className="text-primaryBlueDark pl-2" style={{ fontSize: "16px" }}>
          {title}
        </p>
      </div>
    </div>
  );
}

export default CardNumTotal;

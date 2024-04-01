import Wrapper from "../components/Wrapper";
import FeatureCard from "../components/FeatureCard";

const Features = () => {
  const features = [
    {
      pic: "order delivered",
      title: "PARCEL BOOKING",
      description:
        "Facility to get approximate freight and generate forwarding note that is required at booking counter at station",
    },
    {
      pic: "Delivery",
      title: "ON TIME DELIVERY",
      description:
        "Customers can book Parcel Van by making a request in the Parcel Office",
    },
    {
      pic: "Pickup",
      title: "PROVIDING PICKUP SERVICE",
      description:
        "Get the list of parcel express trains currently available for transporting parcels",
    },
  ];
  return (
    <Wrapper id="features" dark>
      <div className="flex items-center gap-4">
        <div className="w-[10px] h-[35px] bg-[gray]" />
        <h2 className="uppercase text-4xl tracking-tight font-[400] text-white">
          features.
        </h2>
      </div>
      <div className="flex items-center mt-11 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Features;

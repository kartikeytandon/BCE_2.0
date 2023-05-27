import "./TeamCard.css"

const TeamData = [
    {
        image_path: "/assets/Janmejay.webp",
        name: "Janmejay Singh",
        description: "Project Lead"
    },
    {
        image_path: "/assets/shahbaz.webp",
        name: "Shahbaz Ali",
        description: "Senior Backend Developer"
    },
    {
        image_path: "/assets/Piyush.webp",
        name: "Piyush Rai",
        description: "Senior ML Developer"
    },
    {
        image_path: "/assets/kartikey.webp",
        name: "Kartikey Tandon",
        description: "Frontend Developer"
    },
    {
        image_path: "/assets/utkarsh.webp",
        name: "Utkarsh Khokhar",
        description: "Frontend Developer"
    },
    {
        image_path: "/assets/shahswat.webp",
        name: "Shashwat Singh",
        description: "Backend Developer"
    },
    {
        image_path: "/assets/keshav.webp",
        name: "Keshav Gupta",
        description: "ML Developer"
    },
]

const Card = ({image_path, name, description}) => {
    return (
        <div className="grid bg-[#000a27]  place-items-center text-center w-1/4 rounded-lg shadow-glow">
            <div className="container mx-auto w-[100%]  aspect-square">
                <img src={image_path} alt={`${name}.image`} className="w-full h-full object-cover" />
            
            <h2 className="text-xl font-lato font-bold capitalize py-1 text-secondary">
                {name}
                <br />
                <span className="text-sm font-iceberg font-medium uppercase text-white">{description}</span>
            </h2>
            </div>
        </div>
    )
}

const TeamCard = () => {
  return (
    <article className="mx-auto  flex flex-wrap justify-center items-center w-[95%] gap-10">
        {
            TeamData.map(({ image_path, name, description }) => {
                return <Card 
                    key={name}
                    image_path={image_path}
                    name={name}
                    description={description}
                />
            })
        }
    </article>
  )
}

export default TeamCard
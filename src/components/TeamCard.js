const TeamData = [
    {
        image_path: "/assets/Janmejay.webp",
        name: "Janmejay Singh",
        description: "Project Lead"
    },
    {
        image_path: "/assets/shahbaz.webp",
        name: "Shahbaz Ali",
        description: "Project Lead"
    },
    {
        image_path: "/assets/Piyush.webp",
        name: "Piyush Rai",
        description: "Project Lead"
    },
    {
        image_path: "/assets/keshav.webp",
        name: "Keshav Gupta",
        description: "ML Developer"
    },
    {
        image_path: "/assets/shahswat.webp",
        name: "Shashwat Singh",
        description: "Backend Developer"
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
]

const Card = ({image_path, name, description}) => {
    return (
        <div className="bg-primary p-3 grid place-items-center text-center w-1/4 rounded-lg shadow-glow">
            <div className="mx-auto w-[100%] aspect-square">
                <img src={image_path} alt={`${name}.image`} className="w-full h-full object-cover rounded-lg " />
            </div>
            
            <span className="text-xl font-lato font-bold capitalize py-2 text-secondary">{name}</span>
            <span className="text-sm font-iceberg font-medium uppercase text-white">{description}</span>
        </div>
    )
}

const TeamCard = () => {
  return (
    <article className="mx-auto flex flex-wrap justify-center items-center w-[95%] gap-10">
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
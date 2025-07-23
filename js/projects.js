const projects = [
    {
        id: 1,
        title: "Project-1",
        image: "https://picsum.photos/id/56/600/600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi doloribus sit similique reprehenderit",
        code: "https://github.com/profile/project-1.git",
        live: "https://project-1.onrender.com"
    },
    {
        id: 2,
        title: "Project-2",
        image: "https://picsum.photos/id/42/600/600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi doloribus sit similique reprehenderit",
        code: "https://github.com/profile/project-2.git",
        live: "https://project-2.onrender.com"
    },
    {
        id: 3,
        title: "Project-3",
        image: "https://picsum.photos/id/47/600/600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi doloribus sit similique reprehenderit",
        code: "https://github.com/profile/project-3.git",
        live: "https://project-3.onrender.com"
    }
];

let projectContent = document.querySelector(".project-content")

projects.forEach(item => {
    projectContent.innerHTML += `<div class="project-card">
                                    <div class="front">
                                        <img src="${item.image}" />
                                    </div>
                                    <div class="back">
                                        <h3> ${item.title} </h3>
                                        <div class="links">
                                            <a href="${item.live}" class="btn">
                                                <i class="fa fa-code"></i>
                                            </a>
                                            <a href="${item.code}" class="btn">
                                                <i class="fa-brands fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>`
});
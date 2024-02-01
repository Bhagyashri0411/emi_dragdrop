export const pageDetails = [
];

export const Newheadercomponent = {
    action: true,
    component: "Header",
    id: "header",
    items: [],
    logo: {
        logoimg: "",
        logoname: "Welcome!",
        styles: {
            fontSize: 18,
            fontWeight: 500,
            height: 25,
            width: 30
        },
        type: false
    },
    styles: {
        padding: [10, 10],
        color: "#ffffff",
        size: 12,
        bgColor: "#3498db"
    }
}

export const NewSidebarcomponent = {
    action: true,
    component: "Sidebar",
    id: "sidebar",
    items: [
       
        {
            icon: "User",
            href: "/about",
            itemname: "About",
            id: 1,
            type: true,
            subItems: [
                {
                    icon: "User",
                    href: "/about",
                    itemname: "About",
                    id: 11,
                    type: true,
                    subItems: []
                }
            ]
        }
    ],
    styles: {
        color: "#ffffff",
        fontSize: 15,
        gap: 5,
        bgColor: "#3498db",
    },
    position:'right',
}
import React from 'react'

export const PageAdding = ({ page }) => {
    const newPage = {
        components: {
            headercomponent: {},
            sidebarcomponent: {},
        },
        id: Math.max(...page.map(item => item.id)) + 1,
        mainPageStyles: {
            bgColor: "#d9d9d9",
            color: "#000",
            fontSize: 5,
            margin: [0, 0],
            padding: [0, 0],
        },
        pageName: "New Page",  // You can customize the name as needed
        pageLink: `/new-page-${Math.max(...page.map(item => item.id)) + 1}`,  // Example link generation
    };
    return newPage
};

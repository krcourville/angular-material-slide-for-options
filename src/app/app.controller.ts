import "./app.scss";

interface Item {
    title: string;
}

export default class AppController {

    public appname = "App 1.0.0";
    public items: Item[] = [
        {
            title: "Lorem ipsum dolor sit amet"
        },
        {
            title: "Lorem ipsum dolor sit amet"
        },
        {
            title: "Lorem ipsum dolor sit amet"
        },
        {
            title: "Lorem ipsum dolor sit amet"
        }
    ];

    public onDelete(idx) {
        this.items.splice(idx, 1);
    }
}
import { orderByProps } from '../props.js'

test('orderByProps - sorting by specified properties', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

    const sortedByProps = orderByProps(obj, ["name", "level"]);
    expect(sortedByProps).toEqual([
        { key: "name", value: "мечник" },
        { key: "level", value: 2 },
        { key: "attack", value: 80 },
        { key: "defence", value: 40 },
        { key: "health", value: 10 }
    ]);

    const sortedByProps2 = orderByProps(obj, ["level", "name"]);
    expect(sortedByProps2).toEqual([
        { key: "level", value: 2 },
        { key: "name", value: "мечник" },
        { key: "attack", value: 80 },
        { key: "defence", value: 40 },
        { key: "health", value: 10 }
    ]);

    const sortedByProps3 = orderByProps(obj, []);
    expect(sortedByProps3).toEqual([
        { key: "attack", value: 80 },
        { key: "defence", value: 40 },
        { key: "health", value: 10 },
        { key: "level", value: 2 },
        { key: "name", value: "мечник" }
    ]);
});

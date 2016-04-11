export const excludeProps = obj => {
    let copy = {};
    let filter = {};

    for (let i = 1; i < arguments.length; i++) {
        filter[arguments[i]] = true;
    }

    for (let key in obj) {
        if (filter[key]) continue;

        copy[key] = obj[key];
    }

    return copy;
}

function musicInfoToNameAndAuthor(data) {
    const tmp = data.songs[0];
    let author = '';
    for (let i = 0; i < tmp.ar.length; i++) {
        author += tmp.ar[i].name + ' / ';
    }
    author = author.substring(0, author.lastIndexOf("/") - 1);

    return {
        name: tmp.name,
        author,
        cover: tmp.al.picUrl,
    }
}

export {
    musicInfoToNameAndAuthor
};


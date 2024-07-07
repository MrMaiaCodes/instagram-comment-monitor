/*/members-of-congress/adams-alma/summary?cid=N00035451&cycle=2024*/

export default function createCsvLink(partial) {
    // const name = partial.split('/members-of-congress/')[1].split('/summary?')[0];
    const [,,name] = partial.split('/');
    const replaced = partial.replace('/summary?', '/contributors.csv?');
    const link =  `https://www.opensecrets.org${replaced}&type=C`;
    const url = new URL(link);
    const cid = url.searchParams.get("cid");
    const cycle = url.searchParams.get("cycle");
    return {name, link, cid, cycle};
}
console.log(createCsvLink('/members-of-congress/adams-alma/summary?cid=N00035451&cycle=2024'));
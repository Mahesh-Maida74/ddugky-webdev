const baseUrlName = "https://restcountries.com/v3.1/name";
const baseUrlAlpha = "https://restcountries.com/v3.1/alpha";

const print4Neighbours = async function (countryName) {
  const res = [];
  //Level 01
  const res01 = await fetch(`${baseUrlName}/${countryName}`);
  const [data01] = res01.json();

  const country01 = data01.name.common;
  const neighbourAlpha01 = data01.borders.at(0);

  res.push(country01);

  //Level02
  const res02 = await fetch(`${baseUrlAlpha}/${neighbourAlpha01}`);
  const [data02] = res02.json();

  const country02 = data02.name.common;
  const neighbourAlpha02 = data02.borders.at(0);

  res.push(country02);

  //Level03
  const res03 = await fetch(`${baseUrlAlpha}/${neighbourAlpha02}`);
  const [data03] = res03.json();

  const country03 = data03.name.common;
  const neighbourAlpha03 = data03.borders.at(0);

  res.push(country03);

  // Level 04
  const res04 = await fetch(`${baseUrlAlpha}/${neighbourAlpha03}`);
  const [data04] = res04.json();

  const country04 = data04.name.common;
  const neighbourAlpha04 = data04.borders.at(0);

  res.push(country04);

  console.log(res);
};

print4Neighbours("india");

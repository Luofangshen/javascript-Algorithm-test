/*
将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
&  &​amp;
<  &​lt;
>  &gt;
"  	&quot;
'   &apos;
 */

function convert(str) {
  // &colon;&rpar;
  str = str.replace(/&/g, '&​amp;')
  str = str.replace(/</g, '&​lt;')
  str = str.replace(/>/g, '&gt;')
  str = str.replace(/"/g, '&quot;')
  str = str.replace(/'/g, '&apos;')
  console.log(str)
  return str;
}

convert("Dolce & Gabbana");
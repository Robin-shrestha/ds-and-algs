const subString = (str) => {
  let subStr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      subStr.push(
        str
          .split("")
          .slice(i, j + 1)
          .join("")
      );
    }
  }
  return subStr;
};

const getCharMap = (str) => {
  let charMap = {};
  for (let i = 0; i < str.length; i++) {
    charMap[str[i]] = charMap[str[i]] + 1 || 1;
  }
  return charMap;
};
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const charMap1 = getCharMap(str1);

  const charMap2 = getCharMap(str2);

  for (const char in charMap1) {
    if (charMap1[char] !== charMap2[char]) return false;
  }

  return true;
};

function sherlockAndAnagrams(s) {
  // Write your code here
  const subsetArr = subString(s);

  let anagramCount = 0;
  for (let i = 0; i < subsetArr.length; i++) {
    for (let j = i + 1; j < subsetArr.length; j++) {
      if (isAnagram(subsetArr[i], subsetArr[j])) {
        anagramCount++;
      }
    }
  }
  return anagramCount;
}

// console.log(sherlockAndAnagrams("aaaa"));

const repeatNTimes = (strArr) => {
  let n = strArr.length;
  console.time("start");
  let res = strArr.map((item) => {
    return sherlockAndAnagrams(item);
  });
  console.timeEnd("start");
  return res;
};

console.log(
  sherlockAndAnagrams(
    "ifailuhkqqhucpoltgtyovarjsnrbfpvmupwjjjfiwwhrlkpekxxnebfrwibylcvkfealgonjkzwlyfhhkefuvgndgdnbelgruel"
  )
);
// 399,471,370,403,428
// console.log(repeatNTimes(["abba", "abcd", "ifailuhkqq", "kkkk", "cdcd"]));
// console.log(
//   repeatNTimes([
//     "ifailuhkqqhucpoltgtyovarjsnrbfpvmupwjjjfiwwhrlkpekxxnebfrwibylcvkfealgonjkzwlyfhhkefuvgndgdnbelgruel",
//     "gffryqktmwocejbxfidpjfgrrkpowoxwggxaknmltjcpazgtnakcfcogzatyskqjyorcftwxjrtgayvllutrjxpbzggjxbmxpnde",
//     "mqmtjwxaaaxklheghvqcyhaaegtlyntxmoluqlzvuzgkwhkkfpwarkckansgabfclzgnumdrojexnrdunivxqjzfbzsodycnsnmw",
//     "ofeqjnqnxwidhbuxxhfwargwkikjqwyghpsygjxyrarcoacwnhxyqlrviikfuiuotifznqmzpjrxycnqktkryutpqvbgbgthfges",
//     "zjekimenscyiamnwlpxytkndjsygifmqlqibxxqlauxamfviftquntvkwppxrzuncyenacfivtigvfsadtlytzymuwvpntngkyhw",
//   ])
// );
// console.log(
//   repeatNTimes([
//     "ifailuhkqqhucpoltgtyovarjsnrbfpvmupwjjjfiwwhrlkpekxxnebfrwibylcvkfealgonjkzwlyfhhkefuvgndgdnbelgruel",
//     "gffryqktmwocejbxfidpjfgrrkpowoxwggxaknmltjcpazgtnakcfcogzatyskqjyorcftwxjrtgayvllutrjxpbzggjxbmxpnde",
//     "mqmtjwxaaaxklheghvqcyhaaegtlyntxmoluqlzvuzgkwhkkfpwarkckansgabfclzgnumdrojexnrdunivxqjzfbzsodycnsnmw",
//     "ofeqjnqnxwidhbuxxhfwargwkikjqwyghpsygjxyrarcoacwnhxyqlrviikfuiuotifznqmzpjrxycnqktkryutpqvbgbgthfges",
//     "zjekimenscyiamnwlpxytkndjsygifmqlqibxxqlauxamfviftquntvkwppxrzuncyenacfivtigvfsadtlytzymuwvpntngkyhw",
//     "ioqfhajbwdfnudqfsjhikzdjcbdymoecaokeomuimlzcaqkfmvquarmvlnrurdblzholugvwtkunirmnmsatrtbqlioauaxbcehl",
//     "kaggklnwxoigxncgxnkrtdjnoeblhlxsblnqitdkoiftxnsafukbdhasdeihlhfrqkfzqhvnsmsgnrayhsyjsniutmgpfjmssfsg",
//     "fhithnigqftuzzgpdiquhlsozksxxfreddmsmvqgfgzntphmgggszwtkcbmjsllwtukgqvpvxvmatuanbeossqwtpgzbagaukmta",
//     "rqjfiszbigkdqxkfwtsbvksmfrffoanseuenvmxzsugidncvtifqesgreupsamtsyfrsvwlvhtyzgjgnmsowjwhovsmfvwuniasw",
//     "dxskilnpkkdxwpeefvgkyohnwxtrrtxtckkdgnawrdjtcpzplywyxmwtemwmtklnclqccklotbpsrkazqolefprenwaozixvlxhu",
//   ])
// );

// from collections import Counter

// def sherlockAndAnagrams(s):
//     count = Counter(("".join(sorted(s[j:j+i])) for i in range(1,len(s)) for j in range(0,len(s)-i+1) ))
//     return sum(sum(range(i)) for i in count.values())

// for _ in range(int(input())):
//     s = input()
//     print(sherlockAndAnagrams(s))

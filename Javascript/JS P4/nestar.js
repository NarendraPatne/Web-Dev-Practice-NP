let heroes=[["ironman","spiderman","hulk","thor","captain","antman","dr strange"],["superman","batman","flash","aquaman"]];
for(let i=0;i<heroes.length;i++)
{
    console.log("Group "+(i+1));
    for(let j=0;j<heroes[i].length;j++)
    {
        console.log(heroes[i][j]);
    }
}
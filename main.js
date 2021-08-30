var images = ["https://i.postimg.cc/cCyN1Jcz/thispersondoesnotexist1.jpg","https://i.postimg.cc/fL0NhdYX/thispersondoesnotexist2.jpg", "https://i.postimg.cc/4Ny141mr/Snowy-Farmer.png" , "https://th.bing.com/th/id/OIP.Yk2Lh_WNr7G_CWpcNKof1QHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7", "https://th.bing.com/th/id/OIP.FAU0cnRZOS5cqmjM1xALjAHaEK?w=288&h=180&c=7&r=0&o=5&pid=1.7"];
var names = ["Contact Book","John Doe", "Jane Doe", "Joe Shmoe the Villager", "Tim Berners Lee", "Steve"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
    console.log(updatedName);
 
    document.getElementById("images").src = updatedImage;
    document.getElementById("names").innerHTML = updatedName;
}

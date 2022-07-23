var images = ["https://i.postimg.cc/rmdQCVSt/76884871834442553.jpg","https://i.postimg.cc/PqJ4TXVF/766469518399097119.jpg", "https://i.postimg.cc/c4Qhx5xw/IMG-9980.jpg" , "https://i.postimg.cc/kX3rYZYb/IMG-9803.jpg", "https://i.postimg.cc/TPxZ2DvY/IMG-9490.jpg"];
var names = ["Family Book","Dylan Lee", "Evan Lee", "Michael Lee", "Tiffany Shih"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

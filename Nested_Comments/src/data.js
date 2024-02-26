export const data=
{
    "comment_id": 1,
    "text": "This is a top-level comment.",
    "name":"Akshay Walia",
    "image":"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
    "replies": [
      {
        "comment_id": 2,
        "text": "This is a reply to the top-level comment.",
        "name":"Neeraj Saini",
        "image":"https://cours-informatique-gratuit.fr/wp-content/uploads/2017/10/avatar.png",
        "replies": [
          {
            "comment_id": 3,
            "name":"Ashok Goel",
            "image":"https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
            "text": "This is a reply to the first reply.",
            "replies": []
          }
        ]
      },
      {
        "comment_id": 4,
        "name":"Rajat Sinha",
        "image":"https://cours-informatique-gratuit.fr/wp-content/uploads/2017/10/avatar.png",
        "text": "Another reply to the top-level comment.",
        "replies": []
      }
    ]
  }
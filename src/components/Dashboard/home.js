import { useRef } from "react";
import { auth, db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc } from "firebase/firestore/lite";
import { collection } from "firebase/firestore/lite";

const Home = () => {
  const form = useRef();

  const submitPortfolio = (e) => {
    e.preventDefault();
    const name = form.current[0]?.value;
    const description = form.current[1]?.value;
    const url = form.current[2]?.value;
    const thumbnail = form.current[3]?.files[0];
    const gif = form.current[4]?.files[0];

    const thumbnailRef = ref(storage, `portfolio/thumbnails/${thumbnail.name}`);
    const gifRef = ref(storage, `portfolio/gifs/${gif.name}`);

    uploadBytes(thumbnailRef, thumbnail).then((thumbnailSnapshot) => {
      getDownloadURL(thumbnailSnapshot.ref).then((thumbnailUrl) => {
        uploadBytes(gifRef, gif).then((gifSnapshot) => {
          getDownloadURL(gifSnapshot.ref)
            .then((gifUrl) => {
              savePortofolio({
                name,
                description,
                url,
                thumbnail: thumbnailUrl,
                gif: gifUrl,
              });
            })
            .catch((error) => {
              console.log(error);
              savePortofolio({
                name,
                description,
                url,
                thumbnail: thumbnailUrl,
                gif: null,
              });
            });
        });
      });
    });
  };

  const savePortofolio = async (portfolio) => {
    console.log(portfolio);
    try {
      await addDoc(collection(db, "portfolio"), portfolio);
      window.location.reload(false);
    } catch (error) {
      alert("Failed to add portfolio");
    }
  };

  return (
    <div className="dashboard">
      <form ref={form} onSubmit={submitPortfolio}>
        <p>
          <input type="text" placeholder="Name" />
        </p>
        <p>
          <input type="text" placeholder="Description" />
        </p>
        <p>
          <input type="text" placeholder="Url" />
        </p>
        <p style={{ color: "white" }}>
          Thumbnail Image (static)
          <input type="file" accept="image/*" placeholder="Thumbnail" />
        </p>
        <p style={{ color: "white" }}>
          GIF Animation
          <input type="file" accept=".gif" placeholder="GIF" />
        </p>
        <button type="submit">Submit</button>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </form>
    </div>
  );
};

export default Home;

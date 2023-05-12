import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatsFetch } from "./Redux/catState";
import { getImageFetch } from "./Redux/ImageState";

function App() {
  const data = useSelector((state) => state.catsData.cats);
  const img = useSelector((state) => state.imageData.images);
  console.log(data.name);
  console.log(img);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsFetch());
    dispatch(getImageFetch());
  }, [dispatch]);

  return (
    <div>
      <h1>API 1</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h3 style={{ color: "blue" }}>{item.name}</h3>
          <h6>{item.description}</h6>
          <hr />
        </div>

        // <img
        //   key={item.id}
        //   // src={item.image.url}
        //   alt={item.name}
        //   width={300}
        //   height={300}
        // />
      ))}
      <hr />
      <h1>API 2</h1>
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {img.map((item, index) => (
          <div key={index}>
            <img
              alt={item.id}
              src={item.download_url}
              width={300}
              height={300}
            />
            <h4>{item.author}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

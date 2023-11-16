import { CanvasComponent } from "./canvas";
function Home() {
  return (
    <div
      style={{
        background: "aliceblue",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div
        style={{
          width: "80%",
          background: "white",
          position: "fixed",
          left: "20%",
          top: "0",

          overflow: "scroll",
          borderBottom: "1px solid #ccc",
          boxSizing: "border-box",
        }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}>
          <div
            style={{
              borderRight: "1px solid #ccc",
              padding: "30px",
              width: "100%",
              textAlign: "center",
              fontWeight: "bold",
            }}>
            Jean-david
          </div>
          <div
            style={{
              borderRight: "1px solid #ccc",
              padding: "30px",
              width: "100%",
              textAlign: "center",
              fontWeight: "bold",
            }}>
            Albert
          </div>
          <div
            style={{
              borderRight: "1px solid #ccc",
              padding: "30px",
              width: "100%",
              textAlign: "center",
              fontWeight: "bold",
            }}>
            05/02/1973
          </div>
          <div
            style={{
              padding: "30px",
              width: "100%",
              textAlign: "center",
              fontWeight: "bold",
            }}>
            50 ans
          </div>
        </div>
      </div>
      <div
        style={{
          width: "20%",
          background: "white",
          position: "fixed",
          left: "0",
          top: "0",
          height: "100%",
          overflow: "scroll",
          borderRight: "1px solid #ccc",
          padding: "20px",
          boxSizing: "border-box",
        }}>
        <h1
          style={{
            marginBottom: "20px",
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}>
          <img
            style={{ padding: "8px", background: "blue" }}
            src="https://intrasense.fr/wp-content/uploads/2022/08/logo-small.svg"
            alt="Intrasense"
          />
          Intrasense
        </h1>
        <h1>LifeLow - OA</h1>
        <button
          style={{
            marginTop: "30px",
            textAlign: "center",
            padding: "10px",
            background: "red",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
          onClick={() => {
            throw new Error("Make error");
          }}>
          Make error
        </button>
        <div
          style={{
            position: "fixed",
            overflow: "scroll",
            boxSizing: "border-box",
            top: "79px",
            left: "20%",
            height: "100%",
            width: "80%",
            padding: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h1 className="sentry-mask">Canva 1A</h1>
            <CanvasComponent />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h1>Canva 50</h1>
            <CanvasComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

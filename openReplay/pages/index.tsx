import { useEffect, useState } from "react";
import { CanvasComponent } from "./canvas";
import { bootstrap } from "teams-web-send";

const projectKey = "REOptcXHV7f4WE6eN78H";
var isSessionStarted = false; // don't need in production // need because React.strictMode in development

function Home() {
  const [tracker, setTracker] = useState<any>(null);
  const [isSessionStartedState, setIsSessionStartedState] = useState(false);

  useEffect(() => {
    const startOpenReplay = async () => {
      if (isSessionStarted || isSessionStartedState) {
        return null;
      }
      isSessionStarted = true;
      setIsSessionStartedState(true);
      if (!tracker && projectKey) {
        const { default: Tracker } = await import("@openreplay/tracker");

        try {
          const trackerInit = new Tracker({
            projectKey: projectKey,
            __DISABLE_SECURE_MODE: true,
            capturePerformance: false,
          });
          console.log("trackerInit", trackerInit);

          await trackerInit
            .start({ metadata: { version: "1.0.8" } })
            .then((startedSession) => {
              if (startedSession.success) {
                trackerInit.setUserAnonymousID("test 123");
                setTracker(trackerInit);
              }
            });
        } catch (error) {
          console.error("OpenReplay error:", error);
        }
      }
    };
    useEffect(() => {
      if (process.env.NEXT_PUBLIC_KEY_SOFTWARE_LOG) {
        startOpenReplay();
      } else {
        alert("PLEASE SET NEXT_PUBLIC_KEY_SOFTWARE_LOG in .env file");
      }
    }, []);
  }, [tracker]);

  const session = tracker?.featureFlags?.app?.session;

  const teamsWebhookUrl = process.env.NEXT_PUBLIC_KEY_WEB_HOOK;

  const SendingTeamsTest = async () => {
    if (!teamsWebhookUrl) {
      alert("PLEASE SET NEXT_PUBLIC_KEY_WEB_HOOK in .env file");
    } else {
      const sendMessage = bootstrap();
      const message = JSON.stringify({
        title: "ERROR : Make error",
        text: `Error: More informations at : https://app.openreplay.com/${session?.projectID}/session/${session?.sessionID}?jumpto=${session?.timestamp}`,
      });
      await sendMessage(teamsWebhookUrl, message);
    }
  };

  async function handleError() {
    await SendingTeamsTest();
    tracker.setMetadata("error", "Make error");
    throw new Error("Make error");
  }

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
          onClick={async () => {
            await handleError();
          }}>
          Make error
        </button>
        {/* <button
          style={{
            marginTop: "30px",
            textAlign: "center",
            padding: "10px",
            background: "blue",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
          onClick={async () => {
            await SendingTeamsTest();
          }}>
          Send team msg
        </button> */}

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
            <h1 className="sentry-mask">Canva 300</h1>
            <CanvasComponent />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h1 data-openreplay-obscured>Canva 1</h1>
            <CanvasComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

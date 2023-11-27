import { toPng } from "html-to-image";

const generateTicketImage = async () => {
  // Create parent div
  const ticketsDiv = document.createElement("div");
  ticketsDiv.id = "my-node";
  ticketsDiv.className = "mt-10 grid grid-cols-6 text-primary overflow-hidden";

  // Create first column
  const col1Div = document.createElement("div");
  col1Div.className = "col-span-2";
  const img1 = document.createElement("img");
  img1.src =
    "https://images.unsplash.com/photo-1682687982423-295485af248a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  img1.alt = "";
  img1.className = "h-full object-cover";
  col1Div.appendChild(img1);

  // Create second column
  const col2Div = document.createElement("div");
  col2Div.className = "col-span-3 p-6 bg-gradient-to-r from-white to-light";
  const innerDiv1 = document.createElement("div");
  innerDiv1.className =
    "flex justify-between items-center font-bold border-t border-b border-primary p-1";
  innerDiv1.innerHTML = `
  <p>TUESDAY</p>
  <p class="text-secondary text-lg">JULY 9TH</p>
  <p>2023</p>
`;
  const innerDiv2 = document.createElement("div");
  innerDiv2.className = "mt-10 text-center font-black text-accent";
  innerDiv2.innerHTML = `
  <h2 class="text-2xl">Film Festival</h2>
  <h2>8pm to 10pm</h2>
  <h2>Hall No</h2>
`;
  const innerDiv3 = document.createElement("div");
  innerDiv3.className =
    "flex justify-between items-center font-bold border-t border-primary p-1 mt-10";
  innerDiv3.innerHTML = `
  <p>Location</p>
  <p>Person</p>
  <p>Price</p>
`;
  col2Div.appendChild(innerDiv1);
  col2Div.appendChild(innerDiv2);
  col2Div.appendChild(innerDiv3);

  // Create third column
  const col3Div = document.createElement("div");
  col3Div.className = "col-span-1 bg-white p-6 text-center font-bold";
  const img2 = document.createElement("img");
  img2.src =
    "https://plus.unsplash.com/premium_photo-1700169413655-b402fccbbf96?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  img2.alt = "";
  const p = document.createElement("p");
  p.textContent = "#15359784";
  col3Div.appendChild(img2);
  col3Div.appendChild(p);

  // Append columns to the parent div
  ticketsDiv.appendChild(col1Div);
  ticketsDiv.appendChild(col2Div);
  ticketsDiv.appendChild(col3Div);

  const node = document.getElementById("my-node");

  console.log(node);

  try {
    const dataUrl = await toPng(node);
    const downloadLink = document.createElement("a");
    downloadLink.href = dataUrl;
    downloadLink.download = "ticket.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  } catch (error) {
    console.error("Error generating ticket image:", error);
  }
};

export default generateTicketImage;

const Tickets = () => {
  return (
    <div
      id="my-node"
      className="mt-10 grid grid-cols-6  text-primary overflow-hidden"
    >
      <div className="col-span-2">
        <img
          src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-full object-cover"
        />
      </div>
      <div className="col-span-3 p-6 bg-gradient-to-r from-white to-light">
        <div className="flex justify-between items-center font-bold border-t border-b border-primary p-1">
          <p>TUESDAY</p>
          <p className="text-secondary text-lg">JULY 9TH</p>
          <p>2023</p>
        </div>
        <div className="mt-10 text-center font-black text-accent">
          <h2 className="text-2xl">Film Festival</h2>
          <h2>8pm to 10pm</h2>
          <h2>Hall No</h2>
        </div>
        <div className="flex justify-between items-center font-bold border-t  border-primary p-1 mt-10">
          <p>Location</p>
          <p>Person</p>
          <p>Price</p>
        </div>
      </div>
      <div className="col-span-1 bg-white p-6 text-center font-bold">
        <img
          src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
          alt=""
        />
        <p>#15359784</p>
      </div>
    </div>
  );
};

export default Tickets;

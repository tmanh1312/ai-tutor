export default function Account() {
  return (
    <div>
      <div>
        <img className="mt-6 m-auto" src="img/icons/avatar.png" alt="Avatar" />
        {/* <img className="mt-6 m-auto" src="img/icons/edit.png" alt="Edit" /> */}
      </div>
      <div className="py-5">
        <h2 className="general-header pb-5">Account Details</h2>
        <input type="email" className="border-x-2 border-t-2 rounded-t-md w-full h-12" placeholder="Email Address" />
        <input type="password" className="border-x-2 border-b-2 rounded-b-md w-full h-12" placeholder="Password" />
      </div>
      <div className="py-5">
        <h2 className="general-header pb-5">Personal Details</h2>
          <input type="text" className="border-x-2 border-t-2 rounded-t-md w-full h-12" placeholder="First Name" />
          <input type="text" className="border-x-2 w-full h-12" placeholder="Last Name" />
          <input type="text" className="border-x-2 border-b-2 rounded-b-md w-full h-12" placeholder="Preferred Name" />
      </div>
      <div className="py-5">
        <h2 className="general-header pb-5">Employee Details</h2>
        <input type="text" className="border-x-2 border-t-2 rounded-t-md w-full h-12" placeholder="Employee ID" />
        <input type="text" className="border-x-2 w-full h-12" placeholder="Location" />
        <input type="text" className="border-x-2 border-b-2 rounded-b-md w-full h-12" placeholder="Store Number/Name" />
      </div>
      <div className="py-5">
        <input type="submit" className="w-full h-12 bg-neutral-300 text-slate-700 font-bold rounded-md" value="Save Changes" />
      </div>
    </div>
  );
}
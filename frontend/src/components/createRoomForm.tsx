'use client'
import React, { useState } from "react";

interface FormData {
  roomName: string;
  roomNameTemp: string;
  isPublic: boolean;
}

function CreateRoomForm() {
  const [formData, setFormData] = useState<FormData>({
    roomName: '',
    roomNameTemp: '',
    isPublic: false,
  });

  const handleChange = (key:string,value:string|boolean) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  const escapeSpecialChars = (value:string) => value.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-');

  const handleRoomName = (value:string)=>{
    if(value.length > 50){
      value = value.substring(0,50);
    }
    setFormData({ ...formData, 'roomNameTemp' : value, 'roomName' : escapeSpecialChars(value) });
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center gap-4 my-10">
        <input type="text" id="roomNameTemp" name="roomNameTemp" value={formData.roomNameTemp} onChange={(e) => handleRoomName(e.target.value)}  className="w-full py-3 px-4 rounded-lg focus:outline-none ring-2 ring-orange-800 focus:ring-2 focus:ring-orange-600 text-background bg-foreground" placeholder="Enter Room Name" required />
        {
          formData.roomName && <p>Your new room will be created as <span className="text-green-500">{formData.roomName}</span></p>
        }
        <label htmlFor="roomIsPublic" className="inline-flex items-center cursor-pointer">
            <input id="roomIsPublic" name="isPublic" checked={formData.isPublic} onChange={(e) => handleChange('isPublic', e.target.checked)} type="checkbox" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-800"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Public Room (anyone can join)</span>
        </label>
        <button type="submit" className="py-2 px-10 border-2 border-orange-800 rounded-full bg-transparent hover:bg-orange-800 text-foreground transition duration-300 focus:ring-orange-800">
            Create Room
        </button>
    </form>
  );
}

export default CreateRoomForm;

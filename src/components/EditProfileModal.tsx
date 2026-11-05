import React, { useState } from 'react';
import { X, Save, RotateCcw, Image, User, Mail, Phone, MapPin, Github, Linkedin, Sparkles } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  onSave: (updated: PortfolioProfile) => void;
  onReset: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<PortfolioProfile>(profile);
  const [customPhotoInput, setCustomPhotoInput] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setFormData((prev) => ({ ...prev, avatarUrl: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    if (customPhotoInput.trim()) {
      setFormData((prev) => ({ ...prev, avatarUrl: customPhotoInput.trim() }));
      setCustomPhotoInput('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-[#090f24] border border-purple-900/50 rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-[#0b132f]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <div>
              <h3 className="text-base font-bold text-white">Customize Portfolio Info</h3>
              <p className="text-xs text-gray-400">Update your details or switch profile picture</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 text-xs text-gray-300">
          
          {/* Profile Picture Management */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <Image className="w-4 h-4 text-blue-400" />
              <span>Profile Photo</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-purple-500/60 shrink-0">
                <img src={formData.avatarUrl} alt="Preview" className="w-full h-full object-cover object-top" />
              </div>

              <div className="flex-1 space-y-2">
                <div>
                  <label className="block text-[11px] text-gray-400 mb-1">Upload New Picture from Device:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="text-xs text-gray-400 file:mr-2 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500 cursor-pointer"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="url"
                    value={customPhotoInput}
                    onChange={(e) => setCustomPhotoInput(e.target.value)}
                    placeholder="Or paste image URL..."
                    className="flex-1 px-2.5 py-1.5 rounded-lg bg-[#070b19] border border-slate-800 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={handleApplyUrl}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-gray-200 hover:bg-slate-700"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#080d21] border border-slate-800 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-300 mb-1">Professional Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#080d21] border border-slate-800 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-300 mb-1">Academic Subtitle</label>
              <input
                type="text"
                value={formData.subTitle}
                onChange={(e) => setFormData({ ...formData, subTitle: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#080d21] border border-slate-800 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-300 mb-1">Availability Status</label>
              <input
                type="text"
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#080d21] border border-slate-800 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-gray-300 mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#080d21] border border-slate-800 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-300 mb-1">Phone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#080d21] border border-slate-800 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-300 mb-1">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#080d21] border border-slate-800 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-gray-300 mb-1">GitHub URL</label>
              <input
                type="url"
                value={formData.socials.github}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, github: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-[#080d21] border border-slate-800 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-300 mb-1">LinkedIn URL</label>
              <input
                type="url"
                value={formData.socials.linkedin}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, linkedin: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl bg-[#080d21] border border-slate-800 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Short Bio */}
          <div>
            <label className="block font-semibold text-gray-300 mb-1">Hero Short Bio</label>
            <textarea
              rows={3}
              value={formData.shortBio}
              onChange={(e) => setFormData({ ...formData, shortBio: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#080d21] border border-slate-800 text-white focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => {
                onReset();
                onClose();
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 text-gray-400 hover:text-white border border-slate-800"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:from-blue-500 hover:to-purple-500"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

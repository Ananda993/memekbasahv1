import React, { useState } from 'react';
import { AlertCircle, Download, Music2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';

const AudioDownloader = () => {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState('mp3');
  const [bitrate, setBitrate] = useState('320');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateUrl = (url) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    const soundcloudRegex = /^(https?:\/\/)?(www\.)?soundcloud\.com\/.+$/;
    return youtubeRegex.test(url) || soundcloudRegex.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateUrl(url)) {
      setError('Please enter a valid YouTube or SoundCloud URL');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle download process here
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Audio Downloader for YouTube & SoundCloud
          </h1>
          <p className="text-lg text-gray-600">
            Download your favorite music in high quality
          </p>
        </div>

        {/* Main Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music2 className="h-6 w-6" />
              Download Audio
            </CardTitle>
            <CardDescription>
              Enter a YouTube or SoundCloud URL to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* URL Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL
                </label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://youtube.com/... or https://soundcloud.com/..."
                />
              </div>

              {/* Format and Bitrate Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Format
                  </label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="mp3">MP3</option>
                    <option value="aac">AAC</option>
                    <option value="wav">WAV</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bitrate
                  </label>
                  <select
                    value={bitrate}
                    onChange={(e) => setBitrate(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="128">128 kbps</option>
                    <option value="256">256 kbps</option>
                    <option value="320">320 kbps</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Audio
                  </span>
                )}
              </Button>
            </form>

            {/* Error Message */}
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Copyright Notice */}
            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-800">
                ⚠️ For personal use only. Please respect copyright and intellectual property rights.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">What formats are supported?</h3>
              <p className="mt-1 text-gray-600">We support MP3, AAC, and WAV formats with various bitrate options for optimal quality.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Is this service free?</h3>
              <p className="mt-1 text-gray-600">Yes, the service is completely free to use.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">How long does conversion take?</h3>
              <p className="mt-1 text-gray-600">Conversion typically takes 1-3 minutes depending on the file size and selected quality.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioDownloader;
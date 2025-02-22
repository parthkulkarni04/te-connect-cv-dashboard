import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import path from 'path';

export async function POST(req) {
  try {
    // Log that we're entering the API route
    console.log('API route called');

    // Parse the request body
    const body = await req.json();
    console.log('Received data:', body);

    // Basic validation
    if (!body.jobTitle || !body.description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Prepare the Python script path
    const pythonPath = path.join(process.cwd(), 'python', 'a.py');
    console.log('Python script path:', pythonPath);

    // Execute Python script
    return new Promise((resolve) => {
      const command = `python "${pythonPath}" "${body.jobTitle}" "${body.description}"`;
      console.log('Executing command:', command);

      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error('Execution error:', error);
          resolve(NextResponse.json({ error: error.message }, { status: 500 }));
          return;
        }

        if (stderr) {
          console.error('stderr:', stderr);
        }

        try {
          const result = JSON.parse(stdout.trim());
          resolve(NextResponse.json(result));
        } catch (e) {
          console.error('Failed to parse Python output:', stdout);
          resolve(NextResponse.json({ error: 'Invalid response from script' }, { status: 500 }));
        }
      });
    });

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

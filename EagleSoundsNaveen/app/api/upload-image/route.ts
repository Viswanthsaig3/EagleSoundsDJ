import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export async function POST(req: NextRequest) {
  try {
    // Access formData
    const formData = await req.formData();
    
    // Get the file and target information
    const file = formData.get('imageFile') as File;
    const targetFilename = formData.get('targetFilename') as string;
    const targetPath = formData.get('targetPath') as string;
    
    if (!file || !targetFilename) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create buffer from file
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Define path to save the file
    const publicDir = path.join(process.cwd(), 'public');
    const targetDir = path.join(publicDir, targetPath.replace(/^\//, ''));
    
    // Create directory if it doesn't exist
    if (!existsSync(targetDir)) {
      await mkdir(targetDir, { recursive: true });
    }
    
    const filePath = path.join(targetDir, targetFilename);
    
    // Save the file
    await writeFile(filePath, buffer);
    
    const relativePath = path.join(targetPath, targetFilename).replace(/\\/g, '/');
    
    return NextResponse.json({
      message: 'File uploaded successfully',
      filePath: relativePath.startsWith('/') ? relativePath : `/${relativePath}`
    }, { status: 200 });
    
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { message: `Error uploading file: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }
}

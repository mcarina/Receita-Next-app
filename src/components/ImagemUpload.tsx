import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react"

const ImagemUpload = () => {
  return (
        <div className="border-2 border-dashed rounded-lg p-6 text-center">
        <Label htmlFor="image" className="cursor-pointer">
            <div className="space-y-2">
            <Upload className="w-8 h-8 mx-auto text-gray-400" />
            <div className="text-sm text-gray-600">Clique para fazer upload da foto da receita</div>
            <div className="text-xs text-gray-400">PNG, JPG até 5MB</div>
            </div>
            <Input id="image" type="file" className="hidden" accept="image/*" />
        </Label>
        </div>

  )
}

export default ImagemUpload
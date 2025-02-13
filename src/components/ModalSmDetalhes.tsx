import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const ModalSmDetalhes = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div>
        <Label htmlFor="category">Categoria</Label>
        <Select>
          <SelectTrigger>
          <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Breakfast</SelectItem>
            <SelectItem value="2">Breakfast</SelectItem>
            <SelectItem value="3">Breakfast</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="category">Tempo de Preparo</Label>
        <div className="flex gap-2">
        <Input id="prepTime" type="number" placeholder="30" />
          <Select defaultValue="minutes">
            <SelectTrigger>
            <SelectValue />
            </SelectTrigger>
            <SelectContent className="w-[120px]">
              <SelectItem value="1">Hora</SelectItem>
              <SelectItem value="2">Minuto</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="portions">Porções</Label>
        <Input id="portions" type="number" placeholder="4" />
      </div>

    </div>
    
  )
}

export default ModalSmDetalhes
import random
from midiutil.MidiFile import MIDIFile

# Inicializar el archivo MIDI
midi = MIDIFile(1)

# Establecer el tempo a 160 BPM y compás 4/4 en Do mayor
tempo = 95
midi.addTempo(0, 0, tempo)

midi.addTimeSignature(0, 0, 4, 4, 24, 8)
midi.addKeySignature(0, 0, 0, 0, 0)

# Crear una lista de tuplas de notas y tiempos
notas_tiempos = [("C5", 1), ("D5", 2), ("E5", 3), ("D5", 4), ("C5", 5), ("A4", 6), ("A4", 7), ("C5", 8), ("E5", 9), ("D5", 10), ("C5", 11), ("A4", 12), ("A4", 13), ("C5", 14), ("D5", 15), ("E5", 16), ("D5", 17), ("C5", 18), ("A4", 19), ("A4", 20), ("C5", 21), ("D5", 22), ("E5", 23), ("D5", 24), ("C5", 25), ("A4", 26), ("A4", 27)]

# Agregar las notas al archivo MIDI
for i, (nota, tiempo) in enumerate(notas_tiempos):
    midi.addNote(0, 0, int(nota[1]), tiempo, 1, 100)

# Asignar el instrumento piano a la pista 
midi.addProgramChange(0, 0, 0, 1)
midi.addProgramChange(0, 0, 0, program)

# Calcula el tiempo total de la cancion
time = sum([i[1] for i in notas_tiempos])

# Duracion de la cancion en minutos
duracion = (time * 60) / tempo
duracion = 180

# Guardar el archivo MIDI
with open("Fabio.mid", "wb") as output_file:
    midi.writeFile(output_file)
